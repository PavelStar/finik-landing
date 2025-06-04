import { useForm } from "react-hook-form";
import {
  InputText,
  InputPhone,
  Textarea,
  Button,
  Link,
  Paragraph,
} from "../index";
import styles from "./Form.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectDescription: string;
  consent: boolean;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onBlur" });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form className={cx(styles.form)} onSubmit={handleSubmit(onSubmit)}>
      <div className={cx(styles.formFieldsWrap)}>
        <InputText
          className={cx(styles.formField)}
          id="name"
          placeholder="Введите имя"
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
          placeholder="Введите компанию"
          {...register("company")}
          error={errors.company?.message}
        />

        <InputText
          className={cx(styles.formField)}
          id="email"
          type="email"
          placeholder="Введите email"
          {...register("email", {
            required: "Email обязателен",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Неверный формат email",
            },
          })}
          error={errors.email?.message}
        />

        <InputPhone
          className={cx(styles.formField)}
          id="phone"
          placeholder="Введите телефон"
          type="tel"
          {...register("phone", {
            required: "Телефон обязателен",
            pattern: {
              value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
              message: "Введите телефон в формате +7 (999) 999-99-99",
            },
          })}
          error={errors.phone?.message}
        />

        <Textarea
          className={cx(styles.formField)}
          id="projectDescription"
          placeholder="Опишите проект"
          {...register("projectDescription")}
          error={errors.projectDescription?.message}
        />
      </div>

      <Button className={cx(styles.formButton)} type="submit">
        Отправить
      </Button>
      <Paragraph color="grey" size="S">
        Нажимая на кнопку, вы даете{" "}
        <Link color="grey" textDecoration="underline" size="S">
          согласие на обработку персональных данных
        </Link>{" "}
        и соглашаетесь с
        <Link color="grey" textDecoration="underline" size="S">
          политикой конфиденциальности
        </Link>
      </Paragraph>
    </form>
  );
};

export default Form;
