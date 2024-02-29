import { ImageResponse, NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasName = searchParams.has('name');
    const name = hasName ? searchParams.get('name')?.slice(0, 100) : '';

    const hasOrganization = searchParams.has('organization');
    const organization = hasOrganization ? searchParams.get('organization')?.slice(0, 100) : '';

    const hasX = searchParams.has('x');
    const x = hasX ? `x@${searchParams.get('x')?.slice(0, 100)}` : '';

    const hasInstagram = searchParams.has('instagram');
    const instagram = hasInstagram ? `instagram@${searchParams.get('instagram')?.slice(0, 100)}` : '';

    const hasBgColor = searchParams.has('bgColor');
    const bgColor = hasBgColor ? `#${searchParams.get('bgColor')?.slice(0, 100)}` : '#fff';

    const hasTextColor = searchParams.has('textColor');
    const textColor = hasTextColor ? `#${searchParams.get('textColor')?.slice(0, 100)}` : '#000';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(0deg, rgba(111,128,191,1) 0%, rgba(136,202,248,1) 100%)',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            padding: '20px',
            display: 'flex',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgb(255, 255, 255, 0.5)',
              height: '100%',
              width: '100%',
              borderRadius: '20px',
              padding: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '400px',
                width: '700px',
                backgroundColor: `${bgColor}`,
                color: `${textColor}`,
                border: '1px solid black',
                padding: '50px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '25px',
                  display: 'flex',
                }}
              >
                {organization}
              </div>
              <div
                style={{
                  fontSize: '50px',
                  fontWeight: '700',
                  paddingTop: '70px',
                  paddingBottom: '70px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  {name}
                </div>
              </div>
              <div
                style={{
                  fontSize: '25px',
                  display: 'flex',
                }}
              >
                {x}
              </div>
              <div
                style={{
                  fontSize: '25px',
                  display: 'flex',
                }}
              >
                {instagram}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.log(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
