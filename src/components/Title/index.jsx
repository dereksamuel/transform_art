import { SubText, Text } from ".";

export const Title = ({ children, color }) => {
  return (
    <Text color={color}>{ children }</Text>
  );
};

export const SubTitle = ({ children }) => {
  return (
    <SubText>{ children }</SubText>
  );
};
