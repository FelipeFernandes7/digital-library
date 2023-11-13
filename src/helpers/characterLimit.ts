interface CharacterLimitProps {
  text: string;
  limit: number;
}

export function characterLimit({ text, limit }: CharacterLimitProps) {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  } else {
    return text;
  }
}
