PGDMP                         {           api    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16399    api    DATABASE     w   CREATE DATABASE api WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Canada.1252';
    DROP DATABASE api;
                admin    false            �            1259    16428    template_items    TABLE     �   CREATE TABLE public.template_items (
    id integer NOT NULL,
    name character varying,
    "position" integer,
    field character varying,
    content character varying
);
 "   DROP TABLE public.template_items;
       public         heap    admin    false            �            1259    16435    template_items_custom    TABLE     �   CREATE TABLE public.template_items_custom (
    id integer NOT NULL,
    name character varying,
    "position" integer,
    field character varying,
    content character varying
);
 )   DROP TABLE public.template_items_custom;
       public         heap    admin    false            �            1259    16421    template_types    TABLE     \   CREATE TABLE public.template_types (
    id integer NOT NULL,
    type character varying
);
 "   DROP TABLE public.template_types;
       public         heap    admin    false            �            1259    16407 	   templates    TABLE     �   CREATE TABLE public.templates (
    id integer NOT NULL,
    title character varying,
    data jsonb,
    date_created timestamp with time zone,
    date_asof timestamp with time zone,
    date_updated timestamp with time zone,
    type_new integer
);
    DROP TABLE public.templates;
       public         heap    admin    false            �            1259    16401    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(30),
    email character varying(30),
    role character varying,
    last_name character varying,
    username character varying
);
    DROP TABLE public.users;
       public         heap    admin    false            �            1259    16400    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          admin    false    215                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          admin    false    214            u           2604    16404    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          admin    false    214    215    215                      0    16428    template_items 
   TABLE DATA           N   COPY public.template_items (id, name, "position", field, content) FROM stdin;
    public          admin    false    218   C                 0    16435    template_items_custom 
   TABLE DATA           U   COPY public.template_items_custom (id, name, "position", field, content) FROM stdin;
    public          admin    false    219   �                 0    16421    template_types 
   TABLE DATA           2   COPY public.template_types (id, type) FROM stdin;
    public          admin    false    217   F#                 0    16407 	   templates 
   TABLE DATA           e   COPY public.templates (id, title, data, date_created, date_asof, date_updated, type_new) FROM stdin;
    public          admin    false    216   �#                 0    16401    users 
   TABLE DATA           Q   COPY public.users (id, first_name, email, role, last_name, username) FROM stdin;
    public          admin    false    215   n1                  0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          admin    false    214                       2606    16441 0   template_items_custom template_items_custom_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.template_items_custom
    ADD CONSTRAINT template_items_custom_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.template_items_custom DROP CONSTRAINT template_items_custom_pkey;
       public            admin    false    219            }           2606    16434 "   template_items template_items_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.template_items
    ADD CONSTRAINT template_items_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.template_items DROP CONSTRAINT template_items_pkey;
       public            admin    false    218            {           2606    16427 "   template_types template_types_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.template_types
    ADD CONSTRAINT template_types_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.template_types DROP CONSTRAINT template_types_pkey;
       public            admin    false    217            y           2606    16413    templates templates_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.templates
    ADD CONSTRAINT templates_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.templates DROP CONSTRAINT templates_pkey;
       public            admin    false    216            w           2606    16406    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            admin    false    215            �           2606    16464    templates template_types    FK CONSTRAINT     �   ALTER TABLE ONLY public.templates
    ADD CONSTRAINT template_types FOREIGN KEY (type_new) REFERENCES public.template_types(id) NOT VALID;
 B   ALTER TABLE ONLY public.templates DROP CONSTRAINT template_types;
       public          admin    false    216    217    3195               �   x�e�;1Dk�>�~. ����&d���*k�=>�Z !��g�i8�|�C�S�LGG��O��i��0�=��/qd�5P_9�ű��p�3C��������td[�B����=�2��O��K8�ZtY ZDSb�U�\7Ƙ7��QS         N  x��X�N#9����r�h�f�CG�NdT�wM�VN����ʮ�]d2W� ��W��(�$��*�{�����9>��9�7{�FW%���Eɕv���LeΝ9Q����L�<�;-{�g�u�\������\���,��������ܛe�����R%��:nز�)in�HYi��U:�a#�tY{ r��Ft؇�u��=���i��)㋅�%d;�)\1��t"e���-RwX�+����h<�.U���΋�k��>-*�:�\����A�G;Ի"p��g�g��9����y.��Xvٙ6��F0��8�Ï�
N�fMC���-��4�K%�������[�{ú�9���\p+����9�w�YfĂ\���3�J���h�Zuӹ���.�a7Iv��e����n�.����9qQZ�B	�\c��]pX
G�9��>�ڳA�����Q��?���rmhg��[Þ%9����Z��8����$b��2���C�R#[ͭL%[xgn����������]�9���,�!̭H��c�����+)��U�?�L&ٮL�6��j�[�A�ĈT:�K�6�mD��v�#XS&qv�$c�׻,�.�ՕI�ugw.r)n��4����s��=�j�R�1^�TXB
I��"`S"�;+�2����Lxΐ�)G:��9�	W4�*ȕT(��٭0r���߫�$H1U"����#+�؂'�µRA<'�5���;����eK�C����4IU�k�#&�}�yƑ�;/zx\���"���.%�o|��/��/������uE�()�QeQP �n�X��D�"pk*-�^֟}�[��=��	��"�_}Dy�'Iex�sN/��N����
�3>G ��h�� ����߰�2�Jk�Pu�H.�-w㟭�l[�+p�b�l���՜�WR�HF�!G�,%�F��z-�Ll�e�>͗X����^�m@KN	q+r�su|��%cHE�~s���Tw�L�#�_����;N�9��lr� 	@~c��P��ڇ۔��Bj[���9�'@G�εO�D��V،I��y��R$��`�l(� �NG�V��7�-]�A��W���=T�Mΐ��rm%��q>Lȩ���`3����P�[�d��Fz� {Pr��^�_�7���p�˟�e�18)��S��4	�r2[�0.J�=t���ø`s���G-���<�6#��
D�$TÌ�͉�ޕ�<��d�0}n��VZm�VjLڢ�LV�6�|��D8�.k2���M~��r�
VԦ��i�զ���좀t�h�Α��,�/|��RK��H���Tj��%^!@��^d��C�Ihf� ph!��'BG*�H4�T�:'BH�"�=G���Ҵ�	�lL�VB�ȍ�UE^�����~�F� R�C�鯳 �x�`���9��L� �;�h,�M+�m�=�n��;"V��w���mV@=^h�� oza�[me�hYq��x�}��`V����}]Z�\GAB���<����e�, M��! K�7v�	uSd�-�2cr�84A[�5�A���>ٻw۶<�.f�C����뱏)��P,�$ak�� �ԓAW��u�E�"�}Ӊ�K����Z<!]���yr^�T���!�6m]_�Ջ���
�&4�<	��zuOF���Y�8�ѐE���.�1��r5�f�3֏��ьM�F��t�#�]x��?c�)����ht9�uϢф�G�����ˮ���z��a4`���C���,�����s�<>�-���-�)����+��
������;����hr6�/�a��(����k</'���fx��YX���G��0��.���xz������o�h�Dy�/�j��>��zv���w����[.Oq��g�fſ���eo�eJ隈>Є�w�ҵ�L뾭�d�E�y��ȇ6�w���^�O�k]b����;9��i���|;����A��
�I��3�P�\cj�F�mC>j�V�}U!` �z��~�����2�]~�do��Y�"������=�񏍪�h<R)�)���3꫼"kRO����y"���{����N庚7W�J>t=�v�t�X��3��ϐ�����������#4         *   x�3�(J-.VJ�IM,N�2�t�,N��/.-J����� ��
=         �  x��[�n�F�N�b���Ȳ%;u�x(�h#K%�	�b1G���I��@d��j�a�O�ߙJ�$'v�-t�"�sf��9�'�%띲���B��';Oj{�����������n��/n��t�.��H`�$}��[2�:bϟ��Vħ7[�d4���H��&l�{��(QJO�g'�I��h|��$��/B�qt�k��d�#6y����ǭ`���p��Qq�&� �"4��$b��8�G�s1l�h����]D�{����#�[��M�����v��!#�B	֤1;�q��y�{��CA�0VGL���2��헴-��LF�Ò�)��1���~8��k�_����k����F��{����[��.�� �圝�8�}��]@�?����1e!�I��q�:���E���M� �$�4�!��b��� Q���8Z} ˞ŉ�`�՟��:��7�NB�v���&?�JŔ�,f�E ��#�����p�@f�=�a)�6$����<��:�s�uOY��c�]�����u�y�~����{��2�ާ�W���d�kw���^���z�}������x\[1�>�x��j�=;\[]	�I��
���C����a�Ql�7����k���>�4���'/�������G�'���_��蘳�#Z�>dAB7 ��(�g"�E1�	��=0�n,R���Aȣ+���ǻ�d����K�>��>���X5���mO�~f"�a�⍘{��b�d��&Ɨ,4�s&,<K'<eY1��S�m[+�Ca�@���8�'�uyS�N� qv,�C(:�����n�{���kz�^F�do������.�/��xֻl��kz���v_���F���k s���zطt����o��^gbg����o��v}�׃���v����4ڗM�����[�2,���6���e���J�>�ɷ]�+�{�ۄ���Ù��מY�]t���ӊ���H�#��G��KJy;��Vp��{Y��;��^�Ԗ���ݯ:Z��[�7�p�h�D��H�$e��"�Ʉ�]X*�8��4V�d�Y��'� P�Zг2����˔����,�C>E�wE|E�6]"*9���r��l"�K8&ؖqd�~R��.�k&���J�T�Ј�@�������Y�fM�v6d��͸^�R]�L�pB����Dt-���!8�c�^<������b,�h(��v0����%��@1:Ɠ�¼a3`��dN3w�_�:��$��q$GJ��*��؃D{�*iY�����a5fF��v0/>��S����Zړ��G���t䆓h���ŀ�b6���l�S"����I-�L��T�(1\6^�I�Ki���W��1�~�"�G���$�v#Ӊ�~B㓂c!)ė�X]i:$�[��A*lgĸ�r�I�Β��ݛ��J0P�t�E������dw����Z��2��B�����p�lnk�b�݈gs%Ǔ��E�l������C�/M;G�Awt��-V������G�{���N";��~9�VƷ��Y����&�M��$)sE6��|'�!�H�tJrm��Z�/St�������j{k�WX��'�%̇lԵ*�m�GM�2b��F���ʲYY���K�&m<1�,��ˬ�Q���LS��gH�<!����kO׳��H�S�ębյ��R\�+��Ja\�$k3��t��V�
��,�PHZ^��4���҉�1S1�I��g�=<]"��x ���_��v��oĀ���h"@�ô G\��\���SO��cJ�k�����gf��4�a�P*xy�M��EV������"�D�g����ep�HI��	���O
ɯ��K�G�F��=ȱ!����p� ��s�\��TPJ�]��0�4�s�^�^ӳD��M��L�FR>f�1/�SA��N���Ws7p�X�d(iɑL�	����ϸ��d!Лe���1��hLS�\��9a��1��Pʈ1�t�	��k��J ��!�4B���x..�J��Wng��/X;]��L�����������)�a�Y��������D���ƉV2ʥ	7�%*��A.	 �bMa<E�`e�/�)pO(��B����ХF��D�pGsaq5��N�ʌ�I$`������c�2L��ņ	m����%��L�+�D*�Bc�W��8�c���ԍL�1�w��"Ek�h8�������<�V9�i���柑ey�;��R�:Ã��pb�Qs=���R�Ο���06X̙f��Zt;��L&6g��P:��o �n�x{�|���u�ڶxp-�X}*2X�T�"K���d���D~ڿ���`yl���l&�hqK��>�D�i�|�%���`�8�Q�eA}!3�%"F��~Jq��9�1�`�!�����$C�[c9�8��'"�@���P���{R��[�0*eK��w���%��1I;�`Fb�Ke$U�\J��B{��Џ�IL���M�5����TW����-�����;R���"�}�,X�s��y�tA���:��|k5�2^�Oc�� ijd�X�L�q�)�EXk���P�J�<����V�!�Q	F�>g����f�9c8 U��!\�@���R6E�� 5O����˞���HP�v��'�C������)�� ��$rd���f����Vm�6�"A�:��ِ~�
Y]2k�F�*9�l1��9h�"͡�gJRB�(2��$J�v{�U����t?���������ы���5[}ֽhu�����z����5���e�V�Ѯ��=�@7<�_ouX�u��>i�]��z�c>�#��\+Lg�>�k�e��,A>W�����'oT琅�y9�����XI�*��E�0/���?�z��ѵ�c)&��Mh�~��Z�Ӯnް��Y�o��_������w�A���n5Z�Yc�
��_�@��o�v�Uۣ���A7�*��4��^Yip}�lp\gy��w����u���Q&&����Tj"�����e�W�.u���E��wG����f��D\A)u��#f�YIe��KM�Ѡ�P6Meg��kV:Ex�e
iݙ@ͷK�����"��.��qhZ��Nr�%+�aju;ßc�ʺ���qAMrY���8�颡�g���p�Z��0Pg�/�܈�����_�s��D�'�n�Uf����y���@m�k^1���G1��~߮��O|]�޻�v=X׃u=X׃u=X׃u=X׃u=X׃u=X׃u=�G���D��ϵF�Dr/���c�����������}�.����⨺T�U�^T�Q�i�F�x��q
�B�^�)sgRݙTw&՝IugRݙTw&՝IugR���ݙTw&՝I}T�3�;���IɝIugRݙTw&�}徇r�C����P�{(�=���}徇r�C����_��3��ëG���K�ܙTw&՝IugRo�םIu=X׃u=X׃u=X׃u=X׃u=X׃u=X׃��_�L�k��AgRv�UV=<z��h�Ee���M�ŭ3�l�����tP�GS��h���ӧO�ؚ�E         F   x�3��CF\��!�9�E�% R/�(53'��!7�(/3/��$�H/9?�31%73��?,�YU����� A$�     