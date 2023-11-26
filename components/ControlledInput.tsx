import { Controller, ControllerProps } from "react-hook-form";
import { Fieldset, Input, type InputProps, Label, Text } from "tamagui";

type ControlledInputProps = {
  name: string;
  label: string;
  helperText?: string;
  error?: boolean;
  control: ControllerProps["control"];
} & InputProps;

export default function ControlledInput({
  id,
  name,
  label,
  error,
  helperText,
  control,
  ...props
}: ControlledInputProps) {
  return (
    <Fieldset>
      <Label htmlFor={id}>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            id={id}
            {...field}
            onChangeText={field.onChange}
            value={field.value ? String(field.value) : ""}
            {...props}
          />
        )}
      />
      <Text
        fontSize="$1"
        color={error ? "$red10" : "$gray10"}
      >
        {helperText}
      </Text>
    </Fieldset>
  );
}
