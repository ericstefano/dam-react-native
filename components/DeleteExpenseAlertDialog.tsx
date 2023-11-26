import { Trash } from "@tamagui/lucide-icons";
import { AlertDialog, Button, XStack, YStack } from "tamagui";
export function DeleteExpenseAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button
          circular
          color="$red10"
          size="$2.5"
          icon={Trash}
        />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <AlertDialog.Content
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true
              }
            }
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack
            space
            px="$4"
          >
            <AlertDialog.Title>Deletar gasto</AlertDialog.Title>

            <AlertDialog.Description>
              Tem certeza? Ao clicar em &quot;Deletar&quot; o gasto referente
              será deletado.
            </AlertDialog.Description>
            <XStack
              space="$3"
              justifyContent="flex-end"
            >
              <AlertDialog.Cancel asChild>
                <Button>Cancelar</Button>
              </AlertDialog.Cancel>

              <AlertDialog.Action asChild>
                <Button
                  theme="active"
                  color="$red11"
                >
                  Deletar
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
