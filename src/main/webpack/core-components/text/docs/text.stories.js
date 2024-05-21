import Text from "../text.hbs";
import TextTypeFormatting from '../textTypeFormatting.hbs';
import Lists from '../lists.hbs';

export default {
  title: "Core Components/Text",
  argTypes: {
    variant: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
  }
};

export { Text, TextTypeFormatting, Lists };
