import React, { ReactNode, useState } from "react";

import ModifyExpenseForm from "./ModifyExpenseForm";
import TheDialog from "./TheDialog";

type CreateExpenseDialogProps = { trigger: ReactNode };

export default function CreateExpenseDialog({
  trigger
}: CreateExpenseDialogProps) {
  const [open, setOpen] = useState(false);

  function handleOnOpenChange(open: boolean) {
    setOpen(open);
  }

  return (
    <TheDialog
      title="Cadastrar gasto"
      description='Preencha os dados do seu gasto nos campos a seguir. Toque em "Salvar" quando estiver pronto.'
      trigger={trigger}
      open={open}
      onOpenChange={handleOnOpenChange}
    >
      <ModifyExpenseForm onSubmit={() => console.log("oi")} />
    </TheDialog>
  );
}
