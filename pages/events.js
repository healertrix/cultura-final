import styles from "../styles/Home.module.css";
import { EventCard } from "./components/eventCard";
export default function Try() {
  return (
    <>
      <hgroup className=" m-12	">
        <div class="text-2xl md:text-[36px]	events-letter-spacing p-2.5 py-5 ">
          EVENTS
        </div>
        <div class="text-4xl md:text-[64px] treasure-hunt-letter-spacing p-2.5">
          HUNT FOR THE
        </div>
        <div claSS="text-5xl md:text-[84px] treasure-hunt-letter-spacing p-2.5">
          LOST TREASURE
        </div>
      </hgroup>
      <div class=" flex m-10">
        <EventCard text="arts" />
        <EventCard text="dance" />
        <EventCard text="photography " />
        <EventCard text="kannada" />
        <EventCard text="literary" />
        <EventCard text="informal" />
      </div>
      <div class=" flex m-10">
        <EventCard text="Fashion" />
        <EventCard text="Dance" />
        <EventCard text="music" />
        <EventCard text="theatre" />
        <EventCard text="technical" />
        <EventCard text="gaming" />
      </div>
    </>
  );
}
