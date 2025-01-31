import {readFileSync, writeFileSync} from 'fs';
import process from 'process';
import {cosmiconfig, defaultLoadersSync} from "cosmiconfig";
import {emojiConfig, MODULE_NAME, searchPlacesConfig,} from "./config";
import {TCommitEmojiConfig} from "./types";

class GitmojiAutotagFormatter {
  private readonly commitMessageFilePath: string;

  constructor() {
    this.commitMessageFilePath = process.argv[2];

    if (!this.commitMessageFilePath) {
      console.error('Error: Commit message file path is not provided.');
      process.exit(1);
    }
  }

  private async loadConfig() {
    const config = emojiConfig;
    const projectRoot = process.cwd();
    const explorer = cosmiconfig(MODULE_NAME, {
      searchStrategy: "global",
      searchPlaces: searchPlacesConfig,
      loaders: defaultLoadersSync,
    });
    const result = await explorer.search(projectRoot);

    if (result && result.config) {
      Object.assign(emojiConfig, result.config);
    }

    return config;
  }

  private getCommitMessage(): string {
    try {
      return readFileSync(this.commitMessageFilePath, 'utf-8');
    } catch (error) {
      console.error('Error:', (error as Record<string, string>)?.message);
      process.exit(1);
    }
  }

  private extractCommitType(message: string): string | null {
    const regex = /^([^(:!]+)/;
    const match = message.trim().match(regex);

    if (match) {
      return match[1];
    }

    return null;
  }

  private addEmojiToCommitMessage(commitMessage: string, extractCommitType: string | null, config: TCommitEmojiConfig): string {
    commitMessage = commitMessage.trim();
    const emoji = extractCommitType ? config[extractCommitType] : '';

    if (!emoji) return commitMessage;

    return `${emoji} ${commitMessage}`;
  }


  public async runCommitProcessing(): Promise<void> {
    try {
      const config = await this.loadConfig();
      const commitMessage = this.getCommitMessage();
      const extractCommitType = this.extractCommitType(commitMessage);
      const result = this.addEmojiToCommitMessage(commitMessage, extractCommitType, config);

      console.log('Config:', config);
      console.log('Commit Message:', commitMessage);
      console.log('Extracted Commit Type:', extractCommitType);
      console.log('Result:', result);

      writeFileSync(this.commitMessageFilePath, result);
      process.exit(0);
    } catch (error) {
      console.error('Error during commit processing:', (error as Error).message);
      process.exit(1);
    }
  }
}

export const runCommitProcessing = () => {
  return new GitmojiAutotagFormatter().runCommitProcessing()
}
