import type { LoginFormData, LoginFormErrors } from '../../..';
import { validateLoginForm } from '../../..';

export const createLoginHandlers = (
  formData: LoginFormData,
  setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>,
  setErrors: React.Dispatch<React.SetStateAction<LoginFormErrors>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: () => void
) => {
  const validateForm = (): boolean => {
    const newErrors = validateLoginForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSuccess?.();
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formData[name as keyof LoginFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    validateForm
  };
};