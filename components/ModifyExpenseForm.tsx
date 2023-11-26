import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, XStack } from "tamagui";
import { z } from "zod";

import ControlledInput from "./ControlledInput";

const modifyExpenseFormSchema = z.object({
  item: z
    .string({ required_error: "O campo é obrigatório" })
    .trim()
    .min(1, "O campo deve conter pelo menos 1 caracter"),
  quantity: z.coerce
    .number({
      required_error: "O campo é obrigatório",
      invalid_type_error: "O campo precisa ser um número"
    })
    .positive("O campo precisa ser um número positivo"),
  value: z.coerce
    .number({
      required_error: "O campo é obrigatório",
      invalid_type_error: "O campo precisa ser um número"
    })
    .positive("O campo precisa ser um número positivo")
});

export type ModifyExpenseFormData = z.infer<typeof modifyExpenseFormSchema>;

type CreateExpenseFormProps = {
  onSubmit: (data: ModifyExpenseFormData) => void;
};

export default function ModifyExpenseForm({
  onSubmit
}: CreateExpenseFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ModifyExpenseFormData>({
    resolver: zodResolver(modifyExpenseFormSchema)
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        label="Item"
        name="item"
        error={!!errors.item?.message}
        helperText={errors.item?.message}
        control={control}
      />
      <ControlledInput
        label="Quantidade"
        name="quantity"
        error={!!errors.quantity?.message}
        helperText={errors.quantity?.message}
        control={control}
      />
      <ControlledInput
        label="Valor"
        name="value"
        error={!!errors.value?.message}
        helperText={errors.value?.message}
        control={control}
      />
      <XStack
        jc="flex-end"
        mt="$4"
      >
        <Form.Trigger asChild>
          <Button color="$green11">Salvar</Button>
        </Form.Trigger>
      </XStack>
    </Form>
  );
}
