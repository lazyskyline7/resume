import { FC } from 'react';

interface TitleProps {
  children: string;
}
const Title: FC<TitleProps> = ({ children }) => (
  <div className="text-2xl sm:text-4xl">{children}</div>
);

export default Title;
