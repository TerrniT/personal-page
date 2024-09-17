import { getDefaultPathname, languages, useI18n } from '@lib/i18n';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@components/react/ui/dropdown-menu';

import { DotIcon, HeroiconsLanguage, resolveFlag } from '@components/react/icons/icons';

interface Props {
	url: URL
}
export default function LanguageSwitcher({url}: Props) {
  const { lang, p } = useI18n(url);

  const pathname = getDefaultPathname(url);
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
	  	<button className="group flex h-10 w-10 items-center justify-center rounded-full">
          <HeroiconsLanguage className="h-5 w-5" />
          <span className="sr-only">select language</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" alignOffset={40}>
        {Object.entries(languages).map(([language, label]) => (
          <DropdownMenuItem key={language} className="justify-between" asChild>
            <a href={p(pathname, language)}>
				<div className='flex gap-x-2 items-center'>
			  		{resolveFlag(language)}
			  		<span>
              			{label}
			  		</span>
				</div>
              {language === lang && <DotIcon />}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}