import React, { ReactNode, useState } from "react";

import { updateItem } from "../api/items";

import ModifyExpenseForm, {
  type ModifyExpenseFormData
} from "./ModifyExpenseForm";
import TheDialog from "./TheDialog";

type EditExpenseDialogProps = {
  trigger: ReactNode;
  item: ModifyExpenseFormData & { id: string };
};

export default function EditExpenseDialog({
  trigger,
  item
}: EditExpenseDialogProps) {
  const [open, setOpen] = useState(false);

  function handleOnOpenChange(open: boolean) {
    setOpen(open);
  }

  function handleOnSubmit(data: ModifyExpenseFormData) {
    updateItem(item.id, data);
    setOpen(false);
  }

  return (
    <TheDialog
      title="Editar gasto"
      description='Preencha os dados do seu gasto nos campos a seguir. Toque em "Salvar" quando estiver pronto.'
      trigger={trigger}
      open={open}
      onOpenChange={handleOnOpenChange}
    >
      <ModifyExpenseForm
        onSubmit={handleOnSubmit}
        defaultValues={item}
      />
    </TheDialog>
  );
}
