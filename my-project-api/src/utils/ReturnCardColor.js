export const colorsCard = (type) => {
  switch(type) {
    case "bug":
      return "#316520;";
    case "electric":
      return "#F4D23B;";
    case "fire":
      return "#5269AC;";
    case "grass":
      return "#70B873;";
    case "ground":
      return "#D97745;";
    case "normal":
      return "#8A8A8A;";
    case "poison":
      return "#AD61AE;";
    case "water":
      return "#33A4F5;";
    default:
      return "#8A8A8A;";
    }
  };