import { WarningCircle } from "phosphor-react"
import { ComponentProps, forwardRef, ReactElement, ReactSVG } from "react"
import { InputContainer, InputElement } from "./styles"

interface InputProps extends ComponentProps<typeof InputElement> {
  error?: string
  icon?: ReactElement<ReactSVG>
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, icon, className, ...rest }, ref) => {
    return (
      <InputContainer className={className} hasError={!!error} hasIcon={!!icon}>
        <div className="wrapper">
          {icon}

          <InputElement {...rest} ref={ref} hasIcon={!!icon} />
        </div>

        {error && (
          <span title={error}>
            <WarningCircle size={20} /> {error}
          </span>
        )}
      </InputContainer>
    )
  },
)