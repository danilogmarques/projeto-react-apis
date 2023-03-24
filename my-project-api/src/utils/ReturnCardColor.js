export const colorsCard = (type1) => {
  switch(type1) {
    case "Bug":
      return "#316520";
    case "Electric":
      return "#F4D23B";
    case "Fire":
      return "#5269AC";
    case "Grass":
      return "#70B873";
    case "Ground":
      return "#D97745";
    case "Normal":
      return "#8A8A8A";
    case "Poison":
      return "#AD61AE";
    case "Water":
      return "#33A4F5";
    default:
      return "#8A8A8A";
    }
  };