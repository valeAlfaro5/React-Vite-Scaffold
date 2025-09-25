

export const Input = ({ 
  texto = "Ingrese ", 
  value, 
  onChange, 
  type = "text" 
}) => {
  return (
    <input 
      type={type} 
      placeholder={texto} 
      value={value} 
      onChange={onChange} 
      className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
