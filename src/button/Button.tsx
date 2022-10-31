import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-bold text-xl py-2 px-3;
          }

          .btn-primary {
            @apply text-white bg-blue-800;
          }

          .btn-primary:hover {
            @apply bg-gradient-to-r from-green-300 to-yellow-100 text-gray-800;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
