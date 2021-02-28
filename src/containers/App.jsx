import { EmojiCard } from "../components/EmojiCard";
import { emojipedia } from "../emojipedia";

console.log(emojipedia);

function createEmojiCard(emojiTerm) {
  return (
    <EmojiCard
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmojiCard)}</dl>
    </div>
  );
}

export default App;
