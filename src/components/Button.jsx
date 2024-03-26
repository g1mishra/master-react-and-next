// function bnaya with function name
// aur return kia button tag
// export kia Button

// props

export default function Button(props) {
  console.log(props);
  return <button>{props.children}</button>;
}

export function Button2(props) {
  console.log(props);
  function clickMe() {
    props.clickKrnePar();
  }
  return (
    <button disabled={props.disable} onClick={clickMe}>
      {props.btnText}
    </button>
  );
}
// comment
{
  /* line 1

    line2
    <button click=> Log In </button>

*/
}

// default export kro ya fir named export

// export { Button };
