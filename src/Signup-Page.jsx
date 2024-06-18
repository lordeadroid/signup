import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { INITIALFORMDATA } from "./constant";

const SignupPage = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: INITIALFORMDATA,
  });

  return (
    <div className="page">
      <div className="logo">
        <h1>antstack</h1>
      </div>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        className="form"
      >
        <div className="input-container">
          <TextInput
            placeholder="username"
            className="input-box"
            variant="unstyled"
            size="xl"
            key={form.key("username")}
            {...form.getInputProps("username")}
          />
          <TextInput
            placeholder="email"
            className="input-box"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput placeholder="password" className="input-box" />
        </div>
        <Button type="submit" className="button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
