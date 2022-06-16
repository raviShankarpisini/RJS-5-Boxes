const Box = (props) => {
  //  Write your code here.
  const { style, text } = props;
  return (
    <div className={style}>
      <p className="box-text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="card-container">
      <Box style="small-box box-text-style" text="small" />
      <Box style="medium-box box-text-style" text="Medium" />
      <Box style="large-box box-text-style" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
