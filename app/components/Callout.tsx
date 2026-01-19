type CalloutProps = {
  children: React.ReactNode;
};

export default function Callout({ children }: CalloutProps) {
  return (
    <div className="callout">
      {children}
    </div>
  );
}
