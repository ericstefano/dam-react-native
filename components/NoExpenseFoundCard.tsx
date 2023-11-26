import { Card, H6, Text } from "tamagui";

export default function NoExpenseFoundCard() {
  return (
    <Card
      bg="$gray2"
      dsp="flex"
      fd="row"
      jc="space-evenly"
    >
      <Card.Header>
        <H6>Nenhum gasto encontrado</H6>
        <Text
          fontSize="$1"
          textAlign="center"
        >
          Por favor, cadastre um gasto.
        </Text>
      </Card.Header>
    </Card>
  );
}
