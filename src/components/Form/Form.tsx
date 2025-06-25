import { useForm, Controller } from "react-hook-form";
import { Title } from "../../components/index";
import { InputText, InputPhone, Textarea, Button, Paragraph } from "../index";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useState, type FC } from "react";
import Succsess from "./States/Succsess/Succsess";

const cx = classNames.bind(styles);

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectDescription: string;
};

interface IForm {}

const Form: FC<IForm> = ({}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const [isSuccess, setIsSuccess] = useState(false);
  const [title, setTitle] = useState("Анкета");

  const onSubmit = (data: FormData) => {
    console.log("onSubmit ", data);
    setIsSuccess(true);
    setTitle("Анкета отправлена");
  };

  return (
    <form className={cx(styles.form)} onSubmit={handleSubmit(onSubmit)}>
      <header className={cx(styles.header)}>
        <Title size="L">{title}</Title>
      </header>
      {!isSuccess && (
        <div>
          <div className={cx(styles.formFieldsWrap)}>
            <InputText
              className={cx(styles.formField)}
              id="name"
              placeholder="Имя"
              {...register("name", {
                required: "Имя обязательно",
                minLength: { value: 2, message: "Минимум 2 символа" },
                maxLength: { value: 50, message: "Максимум 50 символов" },
              })}
              error={errors.name?.message}
            />

            <InputText
              className={cx(styles.formField)}
              id="company"
              placeholder="Компания"
              {...register("company")}
              error={errors.company?.message}
            />

            <InputText
              className={cx(styles.formField)}
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Неверный формат email",
                },
              })}
              error={errors.email?.message}
            />

            <Controller
              name="phone"
              control={control}
              rules={{
                required: "Телефон обязателен",
                pattern: {
                  value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                  message: "Введите телефон в формате +7 (999) 999-99-99",
                },
              }}
              render={({ field }) => (
                <InputPhone {...field} error={errors.phone?.message} />
              )}
            />

            <Textarea
              className={cx(styles.formField)}
              id="projectDescription"
              placeholder="Описание проекта"
              {...register("projectDescription")}
              error={errors.projectDescription?.message}
            />
          </div>

          <Button className={cx(styles.formButton)} type="submit">
            Отправить
          </Button>
          <Paragraph color="grey" size="S">
            Нажимая на кнопку, вы даете{" "}
            <Link to="" className={styles.link}>
              <Paragraph
                color="grey"
                textDecoration="underline"
                size="S"
                tag="span"
              >
                согласие на обработку персональных данных
              </Paragraph>
            </Link>{" "}
            и соглашаетесь с
            <Link to="privacy" className={styles.link}>
              <Paragraph
                color="grey"
                textDecoration="underline"
                size="S"
                tag="span"
              >
                политикой конфиденциальности
              </Paragraph>
            </Link>
          </Paragraph>
        </div>
      )}
      {isSuccess && (
        <div>
          <Succsess />
        </div>
      )}
    </form>
  );
};

export default Form;
