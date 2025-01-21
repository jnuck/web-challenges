import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

const rooms = [
  {
    name: "Living Room",
    isOn: false,
    id: 1,
  },
  {
    name: "Kitchen",
    isOn: false,
    id: 2,
  },
  {
    name: "Bedroom",
    isOn: false,
    id: 3,
  },
  {
    name: "Bathroom",
    isOn: false,
    id: 4,
  },
  {
    name: "Garage",
    isOn: false,
    id: 5,
  },
  {
    name: "Porch",
    isOn: false,
    id: 6,
  },
  {
    name: "Garden",
    isOn: false,
    id: 7,
  },
  {
    name: "Office",
    isOn: false,
    id: 8,
  },
];

export default function Lights() {
  return (
    <StyledLights>
      {rooms.map((room) => (
        <li key={lights.id}>
          <Light name={lights.name} />
        </li>
      ))}
    </StyledLights>
  );
}
