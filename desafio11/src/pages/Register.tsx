import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { InputCol } from "../components/Form/InputCol";
import { InputRow } from "../components/Form/InputRow";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
// import { TextInput } from "../components/TextInput";
import { Error } from "../components/Form/Error";
import { TextInput } from "../components/Form/TextInput";
import { Title } from "../components/Title";

type Inputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <div
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <main className="bg-gray-50 h-screen overflow-y-scroll max-w-[700px] py-10 px-10 sm:px-24 drop-shadow-xl">
        <Logo />
        <div className="flex mt-4 flex-col justify-center">
          <Title>Crie sua nova conta</Title>
          <p>Tenha seu projeto no ar hoje mesmo.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputRow>
              <InputCol>
                <label className="font-semibold" htmlFor="name">
                  Nome
                </label>
                <TextInput
                  aria-invalid={errors.name ? "true" : "false"}
                  placeholder="Digite seu nome"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : null}
              </InputCol>
              <InputCol>
                <label className="font-semibold" htmlFor="surname">
                  Sobrenome
                </label>
                <TextInput
                  aria-invalid={errors.surname ? "true" : "false"}
                  placeholder="Digite seu sobrenome"
                  type="text"
                  {...register("surname", { required: true })}
                />
                {errors.surname?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : null}
              </InputCol>
            </InputRow>
            <InputRow>
              <InputCol>
                <label className="font-semibold" htmlFor="email">
                  E-mail
                </label>
                <TextInput
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Digite o seu email"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /[\w-\.]+@[\w-\.]+\.\w{2,4}/,
                  })}
                />
                {errors.email?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : errors.email?.type === "pattern" ? (
                  <Error>Insira um email válido</Error>
                ) : null}
              </InputCol>
            </InputRow>
            <InputRow>
              <InputCol>
                <label className="font-semibold" htmlFor="password">
                  Senha
                </label>
                <TextInput
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Digite a sua senha"
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : null}
              </InputCol>
              <InputCol>
                <label className="font-semibold" htmlFor="confirmPassword">
                  Confirme a Senha
                </label>
                <TextInput
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  placeholder="Confirme a sua senha"
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => getValues().password === value,
                  })}
                />
                {errors.confirmPassword?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : errors.confirmPassword?.type === "validate" ? (
                  <Error>Senha Incorreta</Error>
                ) : null}
              </InputCol>
            </InputRow>
            <div className="mt-8">
              <Button buttonType="primary" type="submit">
                Criar Conta
              </Button>
            </div>
          </form>
          <footer className="mt-3">
            <p>
              Já tem uma conta? <Link href="/login">Faça o login</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
