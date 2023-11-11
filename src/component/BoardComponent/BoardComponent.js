import './BoardComponent.scss';

function BoardComponent() {
  return (
    <div className="BoardComponent">
      <div>1 posts</div>
      <div className="posting">
        <div className="title">posting title</div>
        <div className="date">2023-11-10</div>
        <div className="content">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a typ
        </div>
      </div>
    </div>
  );
}

export default BoardComponent;
