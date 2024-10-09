import {
    AtomIcon,
    BadgeDollarSignIcon,
    BitcoinIcon,
    BlocksIcon,
    BookAIcon,
    BookIcon,
    BrainIcon,
    BriefcaseIcon,
    CalendarIcon,
    CameraIcon,
    CarIcon,
    CheckCircleIcon,
    CloudIcon,
    CloudSunIcon,
    CodeIcon,
    CoffeeIcon,
    CoinsIcon,
    DatabaseIcon,
    FileTextIcon,
    FilmIcon,
    GitBranchIcon,
    HeartIcon,
    HelpCircleIcon,
    KeyIcon,
    Landmark,
    LinkIcon,
    LockIcon,
    LucideIcon,
    MailIcon,
    MapIcon,
    MusicIcon,
    NewspaperIcon,
    PaletteIcon,
    PawPrintIcon,
    PhoneIcon,
    ShellIcon,
    ShieldIcon,
    ShoppingCartIcon,
    SignatureIcon,
    SmileIcon,
    TestTubeIcon,
    TextIcon,
    TreePalmIcon,
    TruckIcon,
    UsersIcon,
    VideoIcon,
} from "lucide-react";

import slugify from "slugify";

export function generateCategorySlug(categoryTitle: string) {
    return slugify(categoryTitle.toLowerCase());
}

export const getIcon = (category: string): LucideIcon => {
    switch (category) {
        case "Animals":
            return PawPrintIcon;
        case "Anime":
            return ShellIcon;
        case "Anti-Malware":
            return ShieldIcon;
        case "Art & Design":
            return PaletteIcon;
        case "Authentication & Authorization":
            return KeyIcon;
        case "Blockchain":
            return BitcoinIcon;
        case "Books":
            return BookIcon;
        case "Business":
            return BriefcaseIcon;
        case "Calendar":
            return CalendarIcon;
        case "Cloud Storage & File Sharing":
            return CloudIcon;
        case "Continuous Integration":
            return BlocksIcon;
        case "Cryptocurrency":
            return CoinsIcon;
        case "Currency Exchange":
            return BadgeDollarSignIcon;
        case "Data Validation":
            return CheckCircleIcon;
        case "Dictionaries":
            return BookAIcon;
        case "Documents & Productivity":
            return FileTextIcon;
        case "Email":
            return MailIcon;
        case "Entertainment":
            return FilmIcon;
        case "Environment":
            return TreePalmIcon;
        case "Events":
            return CalendarIcon;
        case "Food & Drink":
            return CoffeeIcon;
        case "Geocoding":
            return MapIcon;
        case "Government":
            return Landmark;
        case "Health":
            return HeartIcon;
        case "Jobs":
            return BriefcaseIcon;
        case "Machine Learning":
            return BrainIcon;
        case "Music":
            return MusicIcon;
        case "News":
            return NewspaperIcon;
        case "Open Data":
            return DatabaseIcon;
        case "Open Source Projects":
            return GitBranchIcon;
        case "Patent":
            return SignatureIcon;
        case "Personality":
            return SmileIcon;
        case "Phone":
            return PhoneIcon;
        case "Photography":
            return CameraIcon;
        case "Programming":
            return CodeIcon;
        case "Science & Math":
            return AtomIcon;
        case "Security":
            return LockIcon;
        case "Shopping":
            return ShoppingCartIcon;
        case "Social":
            return UsersIcon;
        case "Test Data":
            return TestTubeIcon;
        case "Text Analysis":
            return TextIcon;
        case "Transportation":
            return CarIcon;
        case "URL Shorteners":
            return LinkIcon;
        case "Vehicle":
            return TruckIcon;
        case "Video":
            return VideoIcon;
        case "Weather":
            return CloudSunIcon;
        default:
            return HelpCircleIcon;
    }
};
