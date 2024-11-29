function FeedbackOptions({ options, onLeaveFeedback }) {
  const names = Object.keys(options);

  const elements = names.map((name, index) => {
    return (
      <button key={index} name={name} onClick={onLeaveFeedback}>
        {name}
      </button>
    );
  });

  return elements;
}

export default FeedbackOptions;
