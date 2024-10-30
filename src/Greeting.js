export function Greeting({ title, name = "user" }) {
  return (
    <h1>
      {title} dice, {name}
    </h1>
  );
}

export function UserCard(props) {
  //puedo estructurarlo sin props ({name,amount,etc})
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💲{props.amount}</p>
      <p>{props.married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Adress: {props.address.street}</li>
      </ul>
    </div>
  );
}
