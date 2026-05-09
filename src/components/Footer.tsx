import { Phone, Mail } from "lucide-react";

// Updated: Test change for commit tracking
const Footer = () => (
    <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">M</span>
                        </div>
                        <span className="text-foreground font-bold text-lg">MajoraSerm</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Управление репутацией в интернете</p>
                </div>
                
                <div>
                    <h4 className="text-foreground font-semibold mb-4">Навигация</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#услуги" className="hover:text-primary transition-colors">Услуги</a></li>
                        <li><a href="#о нас" className="hover:text-primary transition-colors">О нас</a></li>
                        <li><a href="#блог" className="hover:text-primary transition-colors">Блог</a></li>
                        <li><a href="#faq" className="hover:text-primary transition-colors">Вопрос-Ответ</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-foreground font-semibold mb-4">Документы</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#сертификаты" className="hover:text-primary transition-colors">Сертификаты</a></li>
                        <li><a href="#отзывы" className="hover:text-primary transition-colors">Отзывы</a></li>
                        <li><a href="#контакты" className="hover:text-primary transition-colors">Контакты</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-foreground font-semibold mb-4">Контакты</h4>
                    <div className="space-y-3 text-sm">
                        <a href="tel:+79998499937" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Phone size={14} /> +7 (999) 849-99-37
                        </a>
                        <a href="mailto:majoraserm@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Mail size={14} /> majoraserm@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted-foreground text-sm">© 2026 MajoraSerm. Все права защищены.</p>
                <div className="text-muted-foreground text-xs space-y-1 md:space-y-0 md:flex md:gap-6">
                    <span>ИНН 701713849302</span>
                    <span>ОГРНИП 326700000024895</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
