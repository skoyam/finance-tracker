import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet";
import { insertAccountSchema } from "@/db/schema";
import { AccountForm } from "@/features/accounts/components/accounts-form";
import { z } from "zod";
import { useCreateAccount } from "../api/use-create-accounts";
import { useNewAccount } from "../hooks/use-new-account";

const formSchema = insertAccountSchema.pick({
  name: true,
})

type FormValues = z.input<typeof formSchema>;

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open = {isOpen} onOpenChange = {onClose}>
      <SheetContent className="space-y-4">
        <SheetTitle>
          New Account
        </SheetTitle>
        <SheetDescription>
          Create a new account to track your transactions!
        </SheetDescription>
      <SheetHeader>
        <AccountForm
        onSubmit={onSubmit}
        disabled={mutation.isPending}
        defaultValues={{
          name: "",
        }}
        />
      </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};