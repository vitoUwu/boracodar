import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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

export function ChangePassword() {
  const navigate = useNavigate();
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
        <div className="flex items-center justify-between">
          <Logo />
          <Button buttonType="ghost" size="sm" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </div>
        <div className="flex mt-4 flex-col justify-center">
          <Title>Recupere sua senha</Title>
          <p>Digite o email da sua conta para prosseguir com a recuperação</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputRow>
              <InputCol>
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
            <div className="mt-8">
              <Button buttonType="primary" type="submit">
                Enviar código de recuperação
              </Button>
            </div>
          </form>
          <footer className="mt-3">
            <p>
              Não tem mais acesso ao email?{" "}
              <Link href="/support">Entre em contato com o suporte</Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
