import { SubText, Text } from ".";

export const Title = ({ children }) => {
  return (
    <Text>{ children }</Text>
  );
};

export const SubTitle = ({ children }) => {
  return (
    <SubText>{ children }</SubText>
  );
};
