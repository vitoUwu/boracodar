import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Error } from "../components/Form/Error";
import { InputCol } from "../components/Form/InputCol";
import { InputRow } from "../components/Form/InputRow";
import { TextInput } from "../components/Form/TextInput";
import { Link } from "../components/Link";
import { Logo } from "../components/Logo";
import { Title } from "../components/Title";

type Inputs = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
      <main className="bg-gray-50 min-h-screen max-w-[700px] py-10 px-10 sm:px-24 drop-shadow-xl">
        <Logo />
        <div className="flex mt-4 flex-col justify-center">
          <Title>Acesse a plataforma</Title>
          <p>
            Faça login ou registre-se para começar a contruir seus projetos
            ainda hoje.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="flex justify-between">
                  <label className="font-semibold" htmlFor="senha">
                    Senha
                  </label>
                  <Link href="/change-password">Esqueceu a senha?</Link>
                </div>
                <TextInput
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Digite a sua senha"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                />
                {errors.password?.type === "required" ? (
                  <Error>Obrigatório</Error>
                ) : errors.password?.type === "pattern" ? (
                  <Error>
                    Sua senha deve ter no mínimo 8 caractéres, 1 letra e 1
                    número
                  </Error>
                ) : null}
              </InputCol>
            </InputRow>
            <div className="mt-8">
              <Button buttonType="primary" type="submit">
                Entrar
              </Button>
            </div>
          </form>
          <footer className="mt-3">
            <p>
              Ainda não tem uma conta? <Link href="/register">Inscreva-se</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
