import React, { ReactNode, useState } from "react";

import ModifyExpenseForm, { ModifyExpenseFormData } from "./ModifyExpenseForm";
import TheDialog from "./TheDialog";

type CreateExpenseDialogProps = { trigger: ReactNode };

export default function CreateExpenseDialog({
  trigger
}: CreateExpenseDialogProps) {
  const [open, setOpen] = useState(false);

  function handleOnOpenChange(open: boolean) {
    setOpen(open);
  }

  function handleOnSubmit(data: ModifyExpenseFormData) {
    // #TODO: Add Firebase create mutation
    console.warn(data);
    setOpen(false);
  }

  return (
    <TheDialog
      title="Cadastrar gasto"
      description='Preencha os dados do seu gasto nos campos a seguir. Toque em "Salvar" quando estiver pronto.'
      trigger={trigger}
      open={open}
      onOpenChange={handleOnOpenChange}
    >
      <ModifyExpenseForm onSubmit={handleOnSubmit} />
    </TheDialog>
  );
}
