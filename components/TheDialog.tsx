import { ReactNode } from "react";
import { X } from "@tamagui/lucide-icons";
import {
  Adapt,
  Button,
  Dialog as TamaguiDialog,
  type DialogProps as TamaguiDialogProps,
  Sheet,
  Unspaced
} from "tamagui";

export type TheDialogProps = {
  title: string;
  trigger: ReactNode;
  children?: ReactNode;
  description?: string;
} & Pick<TamaguiDialogProps, "onOpenChange" | "open">;

export default function TheDialog({
  title,
  description,
  trigger,
  children,
  ...props
}: TheDialogProps) {
  return (
    <TamaguiDialog
      modal
      {...props}
    >
      <TamaguiDialog.Trigger asChild>{trigger}</TamaguiDialog.Trigger>

      <Adapt
        when="sm"
        platform="touch"
      >
        <Sheet
          zIndex={200000}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Frame
            p="$5"
            space
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <TamaguiDialog.Portal>
        <TamaguiDialog.Overlay
          key="overlay"
          animation="quick"
          o={0.5}
          enterStyle={{ o: 0 }}
          exitStyle={{ o: 0 }}
        />

        <TamaguiDialog.Content
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
          space
        >
          <TamaguiDialog.Title>{title}</TamaguiDialog.Title>
          {description ? (
            <TamaguiDialog.Description>{description}</TamaguiDialog.Description>
          ) : null}

          {children}

          <Unspaced>
            <TamaguiDialog.Close asChild>
              <Button
                pos="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={X}
              />
            </TamaguiDialog.Close>
          </Unspaced>
        </TamaguiDialog.Content>
      </TamaguiDialog.Portal>
    </TamaguiDialog>
  );
}
