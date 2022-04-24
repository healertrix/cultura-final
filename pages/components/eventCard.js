export const EventCard = ({ text }) => {
  return (
    <>
      <div id="event-card" >
        <div class="m-10">
          <img id="wooden" src="/woodenArrowCard.svg" />
        </div>
        <p id="card-text">{text}</p>
      </div>
    </>
  );
};
