import type { SignupFormData, SignupFormErrors } from '../../..';
import { validateSignupForm } from '../../..';

export const createSignupHandlers = (
  formData: SignupFormData,
  setFormData: React.Dispatch<React.SetStateAction<SignupFormData>>,
  setErrors: React.Dispatch<React.SetStateAction<SignupFormErrors>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  onSuccess?: () => void
) => {
  const validateForm = (): boolean => {
    const newErrors = validateSignupForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      onSuccess?.();
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    
    if (formData[name as keyof SignupFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    validateForm
  };
};