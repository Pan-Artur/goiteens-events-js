import { StyledItem } from "./StyledItem.js";

export const Item = ({ name, location, speaker, type, time }) => {
  return (
    <StyledItem>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{speaker}</p>
      <p>{type}</p>
      <ul>
        <li>{time.start}</li>
        <li>{time.end}</li>
      </ul>
    </StyledItem>
  );
};
