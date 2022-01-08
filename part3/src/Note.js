export const Note = (props) => {
  //console.log({props});

  const { content, date, id } = props;

  return (
    <li className="note">
      <p>{id}</p>
      <p>{content}</p>
      <p>{date}</p>
    </li>
  );
};
