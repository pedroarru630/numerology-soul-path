
import { useNavigate, useSearchParams } from 'react-router-dom';

export interface QuizParams {
  nome?: string;
  genero?: string;
  relacionamento?: string;
  area?: string;
  dia?: string;
  mes?: string;
  ano?: string;
  email?: string;
  score?: string;
  confirmacao?: string;
}

export const useQuizParams = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const getParams = (): QuizParams => {
    const params: QuizParams = {};
    
    if (searchParams.get('nome')) params.nome = searchParams.get('nome')!;
    if (searchParams.get('genero')) params.genero = searchParams.get('genero')!;
    if (searchParams.get('relacionamento')) params.relacionamento = searchParams.get('relacionamento')!;
    if (searchParams.get('area')) params.area = searchParams.get('area')!;
    if (searchParams.get('dia')) params.dia = searchParams.get('dia')!;
    if (searchParams.get('mes')) params.mes = searchParams.get('mes')!;
    if (searchParams.get('ano')) params.ano = searchParams.get('ano')!;
    if (searchParams.get('email')) params.email = searchParams.get('email')!;
    if (searchParams.get('score')) params.score = searchParams.get('score')!;
    if (searchParams.get('confirmacao')) params.confirmacao = searchParams.get('confirmacao')!;
    
    return params;
  };

  const navigateWithParams = (path: string, newParams: Partial<QuizParams> = {}) => {
    const currentParams = getParams();
    const allParams = { ...currentParams, ...newParams };
    
    const urlParams = new URLSearchParams();
    Object.entries(allParams).forEach(([key, value]) => {
      if (value) urlParams.set(key, value);
    });
    
    const paramString = urlParams.toString();
    const fullPath = paramString ? `${path}?${paramString}` : path;
    navigate(fullPath);
  };

  return { getParams, navigateWithParams };
};
