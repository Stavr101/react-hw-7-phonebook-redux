function Statistic({ options, total, positivePercentage }) {
  const names = Object.keys(options);

  const elements = names.map((name, index) => (
    <p key={index}>
      {name}: {options[name]}
    </p>
  ));

  return (
    <div>
      {elements}
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </div>
  );
}

export default Statistic;
