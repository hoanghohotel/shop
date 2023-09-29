import cn from 'classnames';
import { useTranslation } from 'next-i18next';

export default function Copyright({ className }: { className?: string }) {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');
  return (
    <div className={cn('tracking-[0.2px]', className)}>Made with ❤️ by 
      <a
        href="https://mondayui.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-brand-dark"
      > MondayUI</a>

    </div>
  );
}
