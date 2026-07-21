import { Button, Field, Input, Stack, Text, Link } from "@chakra-ui/react";
import { PasswordInput } from "../../src/components/ui/password-input";
import { useForm } from "react-hook-form";

export default function SignUp({ user = () => {} }) {
  //Handle form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //submitting form data
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start" w={"500px"} p={"20px 50px"}>
        <Field.Root invalid={!!errors.username}>
          <Field.Label>Full Name</Field.Label>
          <Input borderColor={"black"} {...register("fullName")} />
          <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.email}>
          <Field.Label>Email</Field.Label>
          <Input borderColor={"black"} {...register("email")} />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.address}>
          <Field.Label>Address</Field.Label>
          <Input borderColor={"black"} {...register("address")} />
          <Field.ErrorText>{errors.address?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password</Field.Label>
          <PasswordInput borderColor={"black"} {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Re-Enter Password</Field.Label>
          <PasswordInput borderColor={"black"} {...register("password")} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">SignUp</Button>
        <Text fontSize={"14px"}>
          Already have an account{" "}
          <Link onClick={() => user((t) => (t = !t))}>
            <Text fontWeight={"bold"}>LOGIN</Text>
          </Link>
        </Text>
      </Stack>
    </form>
  );
}
