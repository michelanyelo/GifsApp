export default class giphy {
  public data?: Data[];
  public meta?: Meta;
  public pagination?: Pagination;
}

export class Meta {
  public status?: number;
  public msg?: string;
  public response_id?: string;
}

export class Pagination {
  public total_count?: number;
  public count?: number;
  public offset?: number;
}

export class Data {
  public type?: string;
  public id?: string;
  public url?: string;
  public slug?: string;
  public bitly_gif_url?: string;
  public bitly_url?: string;
  public embed_url?: string;
  public username?: string;
  public source?: string;
  public title?: string;
  public rating?: string;
  public content_url?: string;
  public source_tld?: string;
  public source_post_url?: string;
  public source_caption?: string;
  public is_sticker?: number;
  public import_datetime?: string;
  public trending_datetime?: string;
  public images?: Images;
  public user?: User;
  public analytics_response_payload?: string;
  public analytics?: Analytics;
  public alt_text?: string;
  public is_low_contrast?: boolean;
}

export class Images {
  public original?: Original;
  public downsized?: Downsized;
  public downsized_large?: DownsizedLarge;
  public downsized_medium?: DownsizedMedium;
  public downsized_small?: DownsizedSmall;
  public downsized_still?: DownsizedStill;
  public fixed_height?: FixedHeight;
  public fixed_height_downsampled?: FixedHeightDownsampled;
  public fixed_height_small?: FixedHeightSmall;
  public fixed_height_small_still?: FixedHeightSmallStill;
  public fixed_height_still?: FixedHeightStill;
  public fixed_width?: FixedWidth;
  public fixed_width_downsampled?: FixedWidthDownsampled;
  public fixed_width_small?: FixedWidthSmall;
  public fixed_width_small_still?: FixedWidthSmallStill;
  public fixed_width_still?: FixedWidthStill;
  public original_still?: OriginalStill;
  public original_mp4?: OriginalMp4;
  public preview?: Preview;
  public preview_gif?: PreviewGif;
  public preview_webp?: PreviewWebp;
}

export class Original {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public mp4_size?: string;
  public mp4?: string;
  public webp_size?: string;
  public webp?: string;
  public frames?: string;
  public hash?: string;
}

export class Downsized {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class DownsizedLarge {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class DownsizedMedium {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class DownsizedSmall {
  public height?: string;
  public width?: string;
  public mp4_size?: string;
  public mp4?: string;
}

export class DownsizedStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class FixedHeight {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public mp4_size?: string;
  public mp4?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedHeightDownsampled {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedHeightSmall {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public mp4_size?: string;
  public mp4?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedHeightSmallStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class FixedHeightStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class FixedWidth {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public mp4_size?: string;
  public mp4?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedWidthDownsampled {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedWidthSmall {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
  public mp4_size?: string;
  public mp4?: string;
  public webp_size?: string;
  public webp?: string;
}

export class FixedWidthSmallStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class FixedWidthStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class OriginalStill {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class OriginalMp4 {
  public height?: string;
  public width?: string;
  public mp4_size?: string;
  public mp4?: string;
}

export class Preview {
  public height?: string;
  public width?: string;
  public mp4_size?: string;
  public mp4?: string;
}

export class PreviewGif {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class PreviewWebp {
  public height?: string;
  public width?: string;
  public size?: string;
  public url?: string;
}

export class User {
  public avatar_url?: string;
  public banner_image?: string;
  public banner_url?: string;
  public profile_url?: string;
  public username?: string;
  public display_name?: string;
  public description?: string;
  public instagram_url?: string;
  public website_url?: string;
  public is_verified?: boolean;
}

export class Analytics {
  public onload?: Onload;
  public onclick?: Onclick;
  public onsent?: Onsent;
}

export class Onload {
  public url?: string;
}

export class Onclick {
  public url?: string;
}

export class Onsent {
  public url?: string;
}
