export const Note = (props) => {
  //console.log({props});

  const { title, body, id } = props;

  return (
    <li>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </li>
  );
};
