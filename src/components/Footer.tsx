const Footer = () => (
    <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground space-y-3 w-full">
                <div className={'flex w-full justify-between items-center'}>
                    <p className={'space-y-3'}>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-xs">M</span>
                            </div>
                            <span className="text-foreground font-bold text-sm">MajoraSerm</span>
                        </div>
                        <div>
                            © 2026 MajoraSerm. Все права защищены.
                        </div>
                    </p>
                    <p className={'space-y-3'}>
                        <div>
                            ИНН 701713849302
                        </div>

                        <div>
                            ОГРНИП 326700000024895
                        </div>

                    </p>
                </div>
            </p>
        </div>
    </footer>
);

export default Footer;
