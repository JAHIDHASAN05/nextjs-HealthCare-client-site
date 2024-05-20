import {
  useForm,
  useFormContext,
  SubmitHandler,
  FieldValues,
  FormProvider,
} from "react-hook-form";
type TFormZodResolverConfig={
  resolver?: any;
  defaultValues ?: Record<string, any>
}
type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormZodResolverConfig;

const FormOfProvider = ({ children, onSubmit , resolver, defaultValues}: TFormProps) => {
    const zodResolverConfig:TFormZodResolverConfig={}
  if(resolver){
      zodResolverConfig['resolver']= resolver;
  }
  if(defaultValues){
    zodResolverConfig['defaultValues']= defaultValues;
  }
  const methods = useForm(zodResolverConfig);
  const {handleSubmit, reset}= methods
  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data)
    reset() 
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default FormOfProvider;
